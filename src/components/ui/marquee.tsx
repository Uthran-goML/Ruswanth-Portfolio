"use client";

import { Marquee as ArkMarquee } from "@ark-ui/react/marquee";
import type React from "react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps
  extends Omit<React.ComponentProps<typeof ArkMarquee.Root>, "side"> {
  /**
   * Scrolls side to side (`horizontal`) or up and down (`vertical`).
   * @default "horizontal"
   */
  orientation?: "horizontal" | "vertical";
  /**
   * Whether the ends fade out with a smooth gradient mask.
   * @default true
   */
  showEdges?: boolean;
}

export const Marquee = (props: MarqueeProps) => {
  const {
    speed = 40,
    showEdges = true,
    spacing = "20px",
    orientation = "horizontal",
    pauseOnInteraction = false,
    autoFill = true,
    className,
    children,
    ...rest
  } = props;

  const side = orientation === "horizontal" ? "start" : "bottom";

  return (
    <ArkMarquee.Root
      autoFill={autoFill}
      className={cn(
        "ui-marquee",
        orientation === "horizontal"
          ? "ui-marquee--horizontal"
          : "ui-marquee--vertical",
        showEdges && "ui-marquee--faded",
        className
      )}
      data-orientation={orientation}
      data-edges={showEdges ? "true" : undefined}
      data-pause-on-interaction={pauseOnInteraction ? "" : undefined}
      data-slot="marquee"
      pauseOnInteraction={pauseOnInteraction}
      side={side}
      spacing={spacing}
      speed={speed}
      {...rest}
    >
      {children}
    </ArkMarquee.Root>
  );
};

export const MarqueeContent = (
  props: React.ComponentProps<typeof ArkMarquee.Content>
) => {
  const { className, ...rest } = props;
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const markCopies = () => {
      for (const copy of viewport.querySelectorAll(":scope > [data-clone]")) {
        copy.setAttribute("inert", "");
      }
    };
    markCopies();
    const observer = new MutationObserver(markCopies);
    observer.observe(viewport, { childList: true });
    return () => observer.disconnect();
  }, []);

  return (
    <ArkMarquee.Viewport
      className={cn("ui-marquee__viewport", className)}
      data-slot="marquee-viewport"
      ref={viewportRef}
    >
      <ArkMarquee.Content
        className={cn("ui-marquee__content", className)}
        data-slot="marquee-content"
        {...rest}
      />
    </ArkMarquee.Viewport>
  );
};

export const MarqueeItem = (
  props: React.ComponentProps<typeof ArkMarquee.Item>
) => {
  const { className, ...rest } = props;

  return (
    <ArkMarquee.Item
      className={cn("ui-marquee__item", className)}
      data-slot="marquee-item"
      {...rest}
    />
  );
};

export const MarqueeEdge = (
  props: React.ComponentProps<typeof ArkMarquee.Edge>
) => {
  const { className, ...rest } = props;

  return (
    <ArkMarquee.Edge
      className={cn("ui-marquee__edge", className)}
      data-slot="marquee-edge"
      {...rest}
    />
  );
};
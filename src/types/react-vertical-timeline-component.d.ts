declare module 'react-vertical-timeline-component' {
  import * as React from 'react';

  interface VerticalTimelineProps {
    children: React.ReactNode;
    className?: string;
    lineColor?: string;
    layout?: '1-column' | '2-columns';
  }

  interface VerticalTimelineElementProps {
    children: React.ReactNode;
    date?: string;
    dateStyle?: React.CSSProperties;
    iconStyle?: React.CSSProperties;
    icon?: React.ReactNode;
    contentStyle?: React.CSSProperties;
    contentArrowStyle?: React.CSSProperties;
    position?: 'left' | 'right';
    visible?: boolean;
  }

  export const VerticalTimeline: React.FC<VerticalTimelineProps>;
  export const VerticalTimelineElement: React.FC<VerticalTimelineElementProps>;
}
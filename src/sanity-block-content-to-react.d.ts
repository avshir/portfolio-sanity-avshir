declare module "@sanity/block-content-to-react" {
  import * as React from "react";

  export interface BlockContentProps {
    blocks: any;
    className?: string;
    renderContainerOnSingleChild?: boolean;
    serializers?: {
      types?: Record<string, (props: any) => JSX.Element>;
      marks?: Record<string, (props: any) => JSX.Element>;
    };
    projectId?: string;
    dataset?: string;
  }

  const BlockContent: React.FC<BlockContentProps>;
  export default BlockContent;
}

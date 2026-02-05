import type { TableBlock, TableMeasure, TableFragment } from '@superdoc/contracts';

export type PageState = {
  page: { fragments: unknown[] };
  columnIndex: number;
  cursorY: number;
  contentBottom: number;
};

export type TableLayoutContext = {
  block: TableBlock;
  measure: TableMeasure;
  columnWidth: number;
  ensurePage: () => PageState;
  advanceColumn: (state: PageState) => PageState;
  columnX: (columnIndex: number) => number;
  /**
   * Global table row break behavior from LayoutOptions.
   * Individual table-level settings (block.attrs.tableRowBreak) override this.
   */
  globalTableRowBreak?: 'avoid' | 'allow';
};
export declare function layoutTableBlock({
  block,
  measure,
  columnWidth,
  ensurePage,
  advanceColumn,
  columnX,
  globalTableRowBreak,
}: TableLayoutContext): void;
export declare function createAnchoredTableFragment(
  block: TableBlock,
  measure: TableMeasure,
  x: number,
  y: number,
): TableFragment;

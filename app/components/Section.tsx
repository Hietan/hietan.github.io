import type {ComponentProps, ReactNode} from "react";
import {Heading, Section as CarbonSection, Tile} from "@carbon/react";

type BaseSectionProps = ComponentProps<typeof CarbonSection>;

export type SectionProps = BaseSectionProps & {
  children?: ReactNode;
  title?: string;
  headingProps?: ComponentProps<typeof Heading>;
};

const DEFAULT_HEADING_CLASS = "cds--type-productive-heading-02";

const Section = ({children, title, headingProps, level, ...rest}: SectionProps) => {
  const {
    style: headingStyle,
    className: headingClassName,
    ...restHeadingProps
  } = headingProps ?? {};
  return (
    <CarbonSection {...rest} level={level ?? 3}>
      <Tile>
        {title ? (
          <Heading
            className={headingClassName ?? DEFAULT_HEADING_CLASS}
            style={{marginBottom: "1rem", ...headingStyle}}
            {...restHeadingProps}
          >
            {title}
          </Heading>
        ) : null}
        {children}
      </Tile>
    </CarbonSection>
  );
};

export default Section;

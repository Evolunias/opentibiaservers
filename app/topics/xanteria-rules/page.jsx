import XanteriaRulesKeywordPage, { generateMetadata } from './xanteria-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaRulesKeywordPage />;
}

import ZuneraOtRulesKeywordPage, { generateMetadata } from './zunera-ot-rules';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtRulesKeywordPage />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-noxiousot-rules');
}

export default function WithScreenshotsNoxiousotRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-noxiousot-rules" />;
}

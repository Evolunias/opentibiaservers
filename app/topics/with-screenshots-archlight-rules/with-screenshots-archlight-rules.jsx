import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-rules');
}

export default function WithScreenshotsArchlightRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-rules" />;
}

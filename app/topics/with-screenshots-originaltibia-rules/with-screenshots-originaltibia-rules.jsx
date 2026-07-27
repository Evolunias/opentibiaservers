import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-originaltibia-rules');
}

export default function WithScreenshotsOriginaltibiaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-originaltibia-rules" />;
}

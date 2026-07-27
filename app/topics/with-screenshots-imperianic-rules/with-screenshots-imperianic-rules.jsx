import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-imperianic-rules');
}

export default function WithScreenshotsImperianicRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-imperianic-rules" />;
}

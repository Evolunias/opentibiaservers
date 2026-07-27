import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-rules');
}

export default function WithScreenshotsTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-rules" />;
}

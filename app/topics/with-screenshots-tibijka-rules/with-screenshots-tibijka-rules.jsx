import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-rules');
}

export default function WithScreenshotsTibijkaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-rules" />;
}

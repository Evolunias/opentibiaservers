import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-rules');
}

export default function WithScreenshotsMediviaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-rules" />;
}

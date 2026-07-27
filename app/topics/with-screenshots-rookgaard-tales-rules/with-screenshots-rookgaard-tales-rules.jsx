import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rookgaard-tales-rules');
}

export default function WithScreenshotsRookgaardTalesRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rookgaard-tales-rules" />;
}

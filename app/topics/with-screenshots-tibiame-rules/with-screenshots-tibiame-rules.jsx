import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-rules');
}

export default function WithScreenshotsTibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-rules" />;
}

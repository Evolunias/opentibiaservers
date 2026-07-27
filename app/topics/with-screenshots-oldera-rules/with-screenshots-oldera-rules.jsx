import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera-rules');
}

export default function WithScreenshotsOlderaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera-rules" />;
}

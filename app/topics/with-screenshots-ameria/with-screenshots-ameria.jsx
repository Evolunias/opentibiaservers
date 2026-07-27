import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria');
}

export default function WithScreenshotsAmeriaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiantis');
}

export default function WithScreenshotsTibiantisKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiantis" />;
}

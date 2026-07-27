import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiantis-ots');
}

export default function WithScreenshotsTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiantis-ots" />;
}

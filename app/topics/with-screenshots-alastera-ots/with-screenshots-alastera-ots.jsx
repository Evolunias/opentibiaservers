import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-alastera-ots');
}

export default function WithScreenshotsAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-alastera-ots" />;
}

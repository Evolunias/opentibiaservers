import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-ots');
}

export default function WithScreenshotsClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-ots" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight');
}

export default function WithScreenshotsArchlightKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight" />;
}

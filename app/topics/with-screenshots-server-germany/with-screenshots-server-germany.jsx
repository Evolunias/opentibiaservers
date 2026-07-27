import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-germany');
}

export default function WithScreenshotsServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-germany" />;
}

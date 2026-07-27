import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-list-germany');
}

export default function WithScreenshotsServerListGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-list-germany" />;
}

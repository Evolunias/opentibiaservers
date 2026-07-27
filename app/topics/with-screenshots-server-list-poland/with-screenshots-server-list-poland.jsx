import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-list-poland');
}

export default function WithScreenshotsServerListPolandKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-list-poland" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-server-sweden');
}

export default function WithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-server-sweden" />;
}

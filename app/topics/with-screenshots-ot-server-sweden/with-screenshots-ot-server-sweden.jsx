import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ot-server-sweden');
}

export default function WithScreenshotsOtServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ot-server-sweden" />;
}

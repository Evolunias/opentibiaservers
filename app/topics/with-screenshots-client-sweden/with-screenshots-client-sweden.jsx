import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-client-sweden');
}

export default function WithScreenshotsClientSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-client-sweden" />;
}

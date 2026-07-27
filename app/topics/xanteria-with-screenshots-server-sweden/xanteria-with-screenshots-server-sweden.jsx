import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-screenshots-server-sweden');
}

export default function XanteriaWithScreenshotsServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-screenshots-server-sweden" />;
}

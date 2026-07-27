import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-retro-server-sweden');
}

export default function YurotsRetroServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-retro-server-sweden" />;
}

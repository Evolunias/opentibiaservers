import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-server-usa');
}

export default function ZezeniaOnlinePvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-server-usa" />;
}

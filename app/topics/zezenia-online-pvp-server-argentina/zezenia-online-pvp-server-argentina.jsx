import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-server-argentina');
}

export default function ZezeniaOnlinePvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-server-argentina" />;
}

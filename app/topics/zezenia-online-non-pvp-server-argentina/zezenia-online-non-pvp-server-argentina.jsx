import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-non-pvp-server-argentina');
}

export default function ZezeniaOnlineNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-non-pvp-server-argentina" />;
}

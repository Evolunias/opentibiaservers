import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-non-pvp-server-france');
}

export default function ZezeniaOnlineNonPvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-non-pvp-server-france" />;
}

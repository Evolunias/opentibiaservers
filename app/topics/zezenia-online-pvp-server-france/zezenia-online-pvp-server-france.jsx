import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-server-france');
}

export default function ZezeniaOnlinePvpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-server-france" />;
}

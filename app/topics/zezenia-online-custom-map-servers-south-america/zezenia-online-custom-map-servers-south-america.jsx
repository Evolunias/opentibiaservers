import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-custom-map-servers-south-america');
}

export default function ZezeniaOnlineCustomMapServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-custom-map-servers-south-america" />;
}

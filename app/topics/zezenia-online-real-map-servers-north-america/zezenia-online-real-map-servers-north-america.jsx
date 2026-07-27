import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-real-map-servers-north-america');
}

export default function ZezeniaOnlineRealMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-real-map-servers-north-america" />;
}

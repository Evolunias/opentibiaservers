import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvpe-server-latin-america');
}

export default function ZezeniaOnlinePvpeServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvpe-server-latin-america" />;
}

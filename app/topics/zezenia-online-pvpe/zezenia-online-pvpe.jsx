import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvpe');
}

export default function ZezeniaOnlinePvpeKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvpe" />;
}

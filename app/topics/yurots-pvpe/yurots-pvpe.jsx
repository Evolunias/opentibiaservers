import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvpe');
}

export default function YurotsPvpeKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvpe" />;
}

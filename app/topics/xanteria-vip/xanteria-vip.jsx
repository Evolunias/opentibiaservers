import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-vip');
}

export default function XanteriaVipKeywordPage() {
  return <StaticKeywordPage slug="xanteria-vip" />;
}

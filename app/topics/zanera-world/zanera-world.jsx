import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-world');
}

export default function ZaneraWorldKeywordPage() {
  return <StaticKeywordPage slug="zanera-world" />;
}

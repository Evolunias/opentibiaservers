import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-14-high-exp-server');
}

export default function Xanteria14HighExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-14-high-exp-server" />;
}

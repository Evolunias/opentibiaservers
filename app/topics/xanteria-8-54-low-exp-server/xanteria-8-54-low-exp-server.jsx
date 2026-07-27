import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-54-low-exp-server');
}

export default function Xanteria854LowExpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-54-low-exp-server" />;
}

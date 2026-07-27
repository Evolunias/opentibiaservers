import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-1-no-reset-server');
}

export default function Xanteria81NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-1-no-reset-server" />;
}

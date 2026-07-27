import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-72-no-reset-server');
}

export default function Xanteria772NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-72-no-reset-server" />;
}

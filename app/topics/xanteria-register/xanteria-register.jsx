import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-register');
}

export default function XanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="xanteria-register" />;
}

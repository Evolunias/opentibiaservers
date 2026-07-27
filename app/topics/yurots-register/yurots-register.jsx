import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-register');
}

export default function YurotsRegisterKeywordPage() {
  return <StaticKeywordPage slug="yurots-register" />;
}

import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-launcher');
}

export default function YurotsLauncherKeywordPage() {
  return <StaticKeywordPage slug="yurots-launcher" />;
}

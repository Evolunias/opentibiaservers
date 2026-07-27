import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-launcher');
}

export default function XanteriaLauncherKeywordPage() {
  return <StaticKeywordPage slug="xanteria-launcher" />;
}

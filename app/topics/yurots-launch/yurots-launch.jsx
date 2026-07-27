import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-launch');
}

export default function YurotsLaunchKeywordPage() {
  return <StaticKeywordPage slug="yurots-launch" />;
}

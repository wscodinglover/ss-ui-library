export enum EventKeys {
  MSG = 'msg',
  GRO = 'groupResDataObj'
}

interface Events {
  sub(key: string, fn: Function): void,
  pub(keys: string, msg?: unknown): void,
  destory(key: string, fn: Function): void
}

class EventEmit implements Events {
  private list: { [key: string]: Function[] } = {}

  /**
   * 订阅模块
   * @param key
   * @param fn
   */
  sub(key: string, fn: Function) {
    if (!this.list[key]) {
      this.list[key] = []
    }
    this.list[key].push(fn)
  }

  /**
   * 发布模块
   */
  pub(key: string, msg?: any) {
    const fns = this.list[key]
    if (!fns || fns.length === 0) return false
    fns.forEach(cd => { cd(msg) })
  }

  /**
   * 取消订阅
   * @param key
   * @param fn
   */
  destory(key: string, fn: Function) {
    const fns = this.list[key]
    if (!fns) return false
    if (!fn) {
      // eslint-disable-next-line no-unused-expressions
      fns && (fns.length = 0)
    } else {
      fns.forEach((cd: Function, i: number) => {
        if (cd === fn) {
          fns.splice(i, 1)
        }
      })
    }
  }
}

export default new EventEmit();
